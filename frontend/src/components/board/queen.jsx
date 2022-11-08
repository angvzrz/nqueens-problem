function Queen({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-50 -50 600 600"
    >
      <defs>
        <linearGradient id="r">
          <stop
            style={{
              stopColor: '#50e1e5',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            offset={0.165}
            style={{
              stopColor: '#5c839a',
              stopOpacity: 1,
            }}
          />
          <stop
            style={{
              stopColor: '#292836',
              stopOpacity: 1,
            }}
            offset={0.823}
          />
          <stop
            style={{
              stopColor: '#321916',
              stopOpacity: 1,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="n">
          <stop
            style={{
              stopColor: 'red',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#ff0',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="p">
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="j">
          <stop
            style={{
              stopColor: '#000',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#000',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="m">
          <stop
            offset={0}
            style={{
              stopColor: '#0cf',
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#04a',
              stopOpacity: 1,
            }}
          />
        </linearGradient>
        <linearGradient id="o">
          <stop
            style={{
              stopColor: 'navy',
              stopOpacity: 0,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#0cf',
              stopOpacity: 1,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="i">
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="h">
          <stop
            style={{
              stopColor: 'red',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: 'maroon',
              stopOpacity: 1,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="k">
          <stop
            offset={0}
            style={{
              stopColor: '#b3b3b3',
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#fff',
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient id="l">
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="q">
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="f">
          <stop
            style={{
              stopColor: '#666',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#e6e6e6',
              stopOpacity: 1,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="e">
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="a">
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="b">
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="c">
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="d">
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="g">
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
      </defs>
      <g
        style={{
          display: 'inline',
        }}
      >
        <path
          style={{
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
            display: 'inline-block',
            margin: '0 auto',
          }}
          d="M293.856 1093.406c-1.28-.24-1.84-.96-2.16-3.04-.56-2.64-.08-11.76.56-12.56.24-.24 1.28-1.12 2.32-1.76 1.2-.88 1.84-1.52 1.84-1.92 0-.4-.08-.56-.32-.4-.24.08-.32 0-.24-.24.08-.24-.48-1.28-1.2-2.32-3.12-4.16-2.56-6.72 2.4-12.24 3.84-4.24 15.12-17.92 17.44-21.2 2.4-3.36 2.4-3.84 1.36-10.48-.88-5.76-.72-6.56 1.52-8.16 3.2-2.24 6.32-5.44 7.2-7.52 1.68-3.52 3.2-8.56 4.96-16.16 2.32-9.6 2.32-9.6 3.04-14.56 2.08-13.36 2.72-23.199 2.72-41.839 0-14.16 0-14.64-.64-15.04-.32-.32-1.12-.48-1.68-.56-1.6 0-10.48-1.52-13.2-2.24-4.48-1.2-8.88-3.12-10.24-4.4-1.68-1.6-1.76-3.12-.24-4.4 1.28-1.04 4.48-2.64 7.68-3.84 2.72-1.04 3.04-1.52 2-3.2-.48-.64-.48-.8 0-1.52 1.12-1.68 4.24-3.04 7.76-3.36l2.16-.24.08-3.92.16-3.92-1.36-.48c-1.92-.8-2.88-2.08-2.88-3.92 0-2 .96-3.44 2.64-4.08l1.28-.56-.16-5.44c-.48-13.44-2.4-21.28-7.12-29.6-1.84-3.36-2.8-4.64-4.08-5.44-1.04-.72-1.2-.96-1.2-1.92 0-1.52 1.04-3.68 2-4.32.4-.24 1.44-.64 2.24-.88.88-.24 1.52-.56 1.52-.64 0-.48 2.96.72 5.52 2.4 1.76 1.04 2.32.96 3.92-.88 1.6-1.92 2.72-2.48 4.8-2.48 1.44.08 4.32 1.12 5.92 2.24l.96.72.32-.72c.16-.48.48-3.52.8-6.8.56-6.799.72-7.439 3.12-9.039 2.96-2 7.76-2.16 10.96-.32 2.8 1.68 3.2 2.64 3.68 9.84.24 3.6.56 5.92.88 6.24.4.56.4.56 1.28 0 3.12-1.92 5.76-2.56 7.92-1.84.72.24 1.68 1.04 2.48 2 1.04 1.2 1.6 1.52 2.32 1.52.88 0 3.92-1.52 5.92-2.96.72-.56 1.36-.8 1.76-.64 1.12.32 2.64 1.76 4 3.84 1.52 2.32 1.6 2.08-1.36 6-2.4 3.2-5.04 7.6-6.32 10.64-1.2 2.88-2.72 8.96-3.2 12.64-.4 3.52-1.04 15.6-.8 16 .16.16.48.24.72.24.32 0 1.04.32 1.6.64 1.2.72 1.76 2.64 1.36 4.4-.32 1.36-1.92 2.96-2.96 2.96-.88 0-1.2 1.36-1.2 4.64 0 3.92.08 4 1.92 4 2.72 0 6.08 1.2 7.76 2.88 1.04.96 1.12 1.28.4 2.48-.32.56-.48 1.2-.4 1.44.08.24 1.92 1.12 4 2 4.24 1.68 6.08 2.8 6.88 4.24.72 1.28.4 2.24-1.2 3.6-2.24 1.84-9.28 4.32-14.72 5.12-1.2.24-3.52.56-5.12.8-1.6.32-3.28.48-3.92.48-.56 0-1.12.24-1.2.4-.4.56-.24 22.72.16 30.799.64 11.68 2 24 3.84 32.96 1.84 9.28 5.28 21.36 7.04 24.8.8 1.52 3.04 3.76 6 6 1.28.96 2.48 2 2.64 2.32.48.88.4 4.4-.08 6.32-.72 2.64-.96 4.8-.72 6.64.16 1.52.56 2.16 2.56 4.88 1.28 1.76 3.12 4 4 5.04.88 1.12 2.16 2.72 2.88 3.6.72.96 2.4 2.96 3.84 4.56 1.36 1.6 3.36 3.84 4.32 5.04.96 1.2 2.48 3.04 3.44 4.08 1.84 2.16 3.12 4.72 3.12 6 0 1.36-.64 2.8-2.32 4.8-2 2.4-2 3.2 0 4.32 2.8 1.68 2.64 1.2 2.64 8.8 0 7.759-.16 8.399-2.16 8.719-1.36.24-116.88.16-118.16-.08z"
          transform="translate(-372.733 -1430.341) scale(1.76505)"
        />
      </g>
    </svg>
  );
}

export { Queen };
