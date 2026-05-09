import React, { useEffect, useRef, memo } from 'react';

interface TradingViewWidgetProps {
  chartId?: string;
  symbol?: string;
  interval?: string;
  studies?: string[];
}

function TradingViewWidget({ 
  chartId = "tradingview_lab", 
  symbol = "FX:EURUSD",
  interval = "15",
  studies = [
    "Volume@tv-basicstudies",
    "MASimple@tv-basicstudies"
  ]
}: TradingViewWidgetProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    // Prevent appending multiple times
    if (container.current.querySelector('script')) return;

    // We generate a unique ID if none provided, but we assume chartId is unique per instance
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbol,
      interval: interval,
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      enable_publishing: false,
      backgroundColor: "rgba(255, 255, 255, 1)",
      gridColor: "rgba(240, 243, 250, 1)",
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      container_id: chartId,
      toolbar_bg: "#f1f3f6",
      studies: studies,
      support_host: "https://www.tradingview.com"
    });
    container.current.appendChild(script);
  }, [chartId, symbol, interval, studies]);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div id={chartId} className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
