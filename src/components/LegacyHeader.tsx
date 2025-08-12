import React, { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLegacyHeaderHtml,
  ensureLegacyStyles,
  absolutizeUrls,
  bindLegacyMobileMenu,
  ensureGlossaryLinks,
  interceptInternalLinks,
} from "@/lib/legacyChrome";

const LegacyHeader: React.FC = () => {
  const navigate = useNavigate();
  const html = useMemo(() => getLegacyHeaderHtml(), []);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureLegacyStyles();
    const el = ref.current;
    if (!el) return;
    // Absolutize any relative URLs and init minimal behaviour
    absolutizeUrls(el);
    bindLegacyMobileMenu(el);
    ensureGlossaryLinks(el);
    interceptInternalLinks(el, (to) => navigate(to));
  }, [navigate]);

  if (!html) return null;
  return <div aria-label="Sidhuvud" dangerouslySetInnerHTML={{ __html: html }} ref={ref} />;
};

export default LegacyHeader;
