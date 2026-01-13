# gabrielrbarcelos.com

My personal website/portfolio/blog.

## Stack

- Next.js
- Typescript
- Tailwind
- Contentlayer/MDX
- Vercel

## Optional services

- Fauna (likes/views, disabled by default)
- ConvertKit (newsletter, disabled by default)
- Strava (activity gallery, disabled by default)


## Main tips for MDX

- Use h2 for sections
- Adding images:
```
<Image alt="acessibility info" caption="caption" src={'/blog/<post-title>/<filaname>.<extension>'} width={1330} height={1052} />
```
- Code blocks should be fenced with triple backticks.
```
Code blocks can have emphasis line.
```tsx {3} => em phasis line 3
```jsx {3-5} => emphases lines 3 to 5.
```bash {3, 5-10} => emphasis lines 3, and 5 to 10.
```
- Use video tags for videos.
```
<video
  playsInline
  autoPlay
  loop
  muted
  width="710"
  style={{ width: "100%", maxWidth: 710, marginBottom: 20 }}
>   <source
    src="/blog/<post-path>/<filename>.<extension>"
    type="video/mp4"
  />
  Sorry, your browser doesn't support embedded videos.
</video>
```
- Use warning component for important notes.
```
<Warning type="warning">
  Write a paragraph here.
  In the meantime I recommend checking the{" "}
  <a href="https://mdxjs.com/" target="_blank">
    mdx
  </a>
  documentation.
</Warning>
```
- Use components for custom elements.
``` {3}
## Wrapping up

Our finished component:
<div style={{ background: "var(--boxBg)", padding: 100 }}>
  <Parallax>
    <p
      style={{
        background: "var(--brand)",
        color: "white",
        padding: 10,
        textAlign: "center",
        borderRadius: 5,
        fontWeight: 700,
      }}
    >
      Parallax
    </p>
  </Parallax>
</div>
```