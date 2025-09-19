import React, { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ModernFooter from "./ModernFooter";

const LegacyFooter: React.FC = () => {
  return <ModernFooter />;
};

export default LegacyFooter;
