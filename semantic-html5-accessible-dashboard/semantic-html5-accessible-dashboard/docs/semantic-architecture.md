# Semantic component architecture

## Landmark hierarchy

```text
body
├── skip link
├── header
│   └── nav
├── div.layout
│   ├── aside
│   │   └── nav
│   └── main
│       ├── header
│       ├── section
│       ├── section
│       └── section/article
└── footer
    └── nav
```

## Component rules

- Use native HTML elements before ARIA.
- Use one meaningful `main` landmark per page.
- Give repeated navigation regions distinct accessible labels.
- Keep heading levels sequential and meaningful.
- Associate every form control with a `label`.
- Group related controls with `fieldset` and `legend`.
- Use table captions and scoped header cells.
- Use native `dialog` for modal behavior.
- Keep keyboard focus visible.
