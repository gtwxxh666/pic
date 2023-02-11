:root{
  --heo-white: #fff;
  --heo-black: #000;
  --heo-none: rgba(0,0,0,0);
  --heo-gray: #999999;
  --heo-yellow: #ffc93e;
  --heo-main: var(--heo-theme);
  --heo-main-op: var(--heo-theme-op);
  --heo-shadow-theme: 0 8px 12px -3px var(--heo-theme-op);
  --heo-shadow-main: 0 8px 12px -3px var(--heo-main-op);
  --heo-shadow-blue: 0 8px 12px -3px rgba(40, 109, 234,.20);
  --heo-shadow-white: 0 8px 12px -3px rgba(255, 255, 255,.20);
  --heo-shadow-black: 0 0 12px 4px rgba(0, 0, 0,.05);
  --heo-shadow-yellow: 0px 38px 77px -26px rgba(255, 201, 62,.12);
  --heo-shadow-red: 0 8px 12px -3px #ee7d7936;
  --heo-shadow-green: 0 8px 12px -3px #87ee7936;
  --heo-logo-color: linear-gradient(215deg,#4584ff 30%,#ff7676 70%);
  --style-border: 1px solid var(--heo-card-border);
  --style-border-hover: 1px solid var(--heo-theme);
}

::selection {
  background: var(--heo-fontcolor);
  color: var(--heo-background);
}

[data-theme=light] {
  --heo-theme: #425AEF;
  --heo-theme-op: #4259ef23;
  --heo-blue: #425AEF;
  --heo-red: #D8213C;
  --heo-pink: #FF7C7C;
  --heo-green: #57bd6a;
  --heo-fontcolor: #363636;
  --heo-background: #f7f9fe;
  --heo-reverse: #000;
  --heo-maskbg: rgba(255, 255, 255, 0.6);
  --heo-maskbgdeep: rgba(255, 255, 255, 0.85);
  --heo-hovertext: var(--heo-theme);
  --heo-ahoverbg: #F7F7FA;
  --heo-lighttext: var(--heo-main);
  --heo-secondtext: rgba(60, 60, 67, 0.6);
  --heo-scrollbar: rgba(60, 60, 67, 0.4);
  --heo-card-btn-bg: #edf0f7;
  --heo-post-blockquote-bg: #fafcff;
  --heo-post-tabs-bg: #f2f5f8;
  --heo-secondbg: #edf0f7;
  --heo-shadow-nav:0 5px 12px -5px rgba(102, 68, 68, 0.05);
  --heo-card-bg: #fff;
  --heo-shadow-lightblack:0 5px 12px -5px rgba(102, 68, 68, 0.00);
  --heo-shadow-light2black:0 5px 12px -5px rgba(102, 68, 68, 0.00);
  --heo-card-border: #e3e8f7;
}

[data-theme=dark] {
  --heo-theme: #0084FF;
  --heo-theme-op: #0084FF23;
  --heo-blue: #0084FF;
  --heo-red: #FF3842;
  --heo-pink: #FF7C7C;
  --heo-green: #57bd6a;
  --heo-fontcolor: #F7F7FA;
  --heo-background: #18171d;
  --heo-reverse: #fff;
  --heo-maskbg: rgba(0,0,0, 0.6);
  --heo-maskbgdeep: rgba(0,0,0, 0.85);
  --heo-hovertext: #0A84FF;
  --heo-ahoverbg: #fff;
  --heo-lighttext: #f2b94b;
  --heo-secondtext: #a1a2b8;
  --heo-scrollbar: rgba(200, 200, 223, 0.4);
  --heo-card-btn-bg: #30343f;
  --heo-post-blockquote-bg: #000;
  --heo-post-tabs-bg: #121212;
  --heo-secondbg: #30343f;
  --heo-shadow-nav:0 5px 20px 0px rgba(28, 28, 28, 0.4);
  --heo-card-bg: #1d1b26;
  --heo-shadow-lightblack:0 5px 12px -5px rgba(102, 68, 68, 0.0);
  --heo-shadow-light2black:0 5px 12px -5px rgba(102, 68, 68, 0.0);
  --heo-card-border: #42444a;
}

@media screen and (max-width: 768px){
  :root{
    --style-border: 0px solid var(--heo-card-border);
    --style-border-hover: 0px solid var(--heo-theme);
  }
}
