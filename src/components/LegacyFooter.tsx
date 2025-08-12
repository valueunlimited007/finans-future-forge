import React, { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLegacyFooterHtml,
  ensureLegacyStyles,
  absolutizeUrls,
  interceptInternalLinks,
} from "@/lib/legacyChrome";

const LegacyFooter: React.FC = () => {
  const navigate = useNavigate();
  const html = useMemo(() => getLegacyFooterHtml(), []);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureLegacyStyles();
    const el = ref.current;
    if (!el) return;
    absolutizeUrls(el);
    interceptInternalLinks(el, (to) => navigate(to));
  }, [navigate]);

  if (!html) return null;
  return <div aria-label="Sidfot" dangerouslySetInnerHTML={{ __html: html }} ref={ref} />;
};

export default LegacyFooter;
