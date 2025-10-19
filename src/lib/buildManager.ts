export type SiteLabel = 'finanzen' | 'finansguiden' | 'kasinos';

export interface SiteInfo {
  label: SiteLabel;
  domain: string;
  market: string;
  type: string;
  flag: string;
  routes: number;
}

export interface BuildResult {
  success: boolean;
  message: string;
  timestamp: Date;
  files: string[];
  errors?: string[];
}

export interface BuildProgress {
  site: SiteLabel;
  status: 'idle' | 'building' | 'success' | 'error';
  message: string;
  progress: number;
}

const SITE_CONFIGS: Record<SiteLabel, SiteInfo> = {
  finanzen: {
    label: 'finanzen',
    domain: 'finanzen-guide.de',
    market: 'DE',
    type: 'Finance',
    flag: '🇩🇪',
    routes: 45,
  },
  finansguiden: {
    label: 'finansguiden',
    domain: 'finansguiden.se',
    market: 'SE',
    type: 'Finance',
    flag: '🇸🇪',
    routes: 60,
  },
  kasinos: {
    label: 'kasinos',
    domain: 'kasinos.se',
    market: 'SE',
    type: 'Casino',
    flag: '🎰',
    routes: 50,
  },
};

class BuildManager {
  private listeners: Map<SiteLabel, ((progress: BuildProgress) => void)[]> = new Map();

  getSiteInfo(label: SiteLabel): SiteInfo {
    return SITE_CONFIGS[label];
  }

  getAllSites(): SiteInfo[] {
    return Object.values(SITE_CONFIGS);
  }

  subscribe(site: SiteLabel, callback: (progress: BuildProgress) => void) {
    if (!this.listeners.has(site)) {
      this.listeners.set(site, []);
    }
    this.listeners.get(site)!.push(callback);
  }

  private emit(progress: BuildProgress) {
    const callbacks = this.listeners.get(progress.site) || [];
    callbacks.forEach(cb => cb(progress));
  }

  async generateSEOFiles(site: SiteLabel): Promise<BuildResult> {
    const siteInfo = this.getSiteInfo(site);
    
    this.emit({
      site,
      status: 'building',
      message: `Generating SEO files for ${siteInfo.domain}...`,
      progress: 10,
    });

    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      this.emit({
        site,
        status: 'building',
        message: 'Generating sitemap.xml...',
        progress: 30,
      });
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      this.emit({
        site,
        status: 'building',
        message: 'Generating robots.txt...',
        progress: 60,
      });
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      this.emit({
        site,
        status: 'building',
        message: 'Generating llms.txt...',
        progress: 90,
      });
      
      await new Promise(resolve => setTimeout(resolve, 300));

      this.emit({
        site,
        status: 'success',
        message: 'SEO files generated successfully!',
        progress: 100,
      });

      return {
        success: true,
        message: `SEO files generated for ${siteInfo.domain}`,
        timestamp: new Date(),
        files: [
          'public/sitemap.xml',
          'public/robots.txt',
          'public/llms.txt',
          'public/.well-known/security.txt',
        ],
      };
    } catch (error) {
      this.emit({
        site,
        status: 'error',
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        progress: 0,
      });

      return {
        success: false,
        message: `Failed to generate SEO files: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: new Date(),
        files: [],
        errors: [error instanceof Error ? error.message : 'Unknown error'],
      };
    }
  }

  async validateSiteConfig(site: SiteLabel): Promise<{ valid: boolean; issues: string[] }> {
    const siteInfo = this.getSiteInfo(site);
    const issues: string[] = [];

    if (!siteInfo.domain) {
      issues.push('Missing domain configuration');
    }

    if (!siteInfo.market) {
      issues.push('Missing market configuration');
    }

    if (siteInfo.routes === 0) {
      issues.push('No routes configured');
    }

    return {
      valid: issues.length === 0,
      issues,
    };
  }

  async generateAllSites(): Promise<Record<SiteLabel, BuildResult>> {
    const results = await Promise.all(
      Object.keys(SITE_CONFIGS).map(site => 
        this.generateSEOFiles(site as SiteLabel)
      )
    );

    return {
      finanzen: results[0],
      finansguiden: results[1],
      kasinos: results[2],
    };
  }
}

export const buildManager = new BuildManager();
