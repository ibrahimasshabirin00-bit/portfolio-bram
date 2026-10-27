<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep editable profile, contact values, sample projects and metadata helpers in `src/data/portfolio.ts` so content changes stay independent of page layouts.
- Use separate file routes for Home, About, Portfolio, Resume and Contact, with a shared SiteShell and a portfolio layout rendering Outlet, so navigation and deep links remain consistent.
- Keep unprovided contact information empty and clearly label sample projects and resume content, so the template never implies verified credentials or sends messages to invented recipients.
- Keep visual tokens and reusable presentation styles in `src/styles.css`, so pages share one design system.
