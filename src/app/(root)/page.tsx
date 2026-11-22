// "/" picks the visitor's language (hu / en, otherwise es) and redirects. Works without a server.
const script = `(function(){var l=(navigator.languages||[navigator.language||'es']).join(',').toLowerCase();var t=/(^|,)hu/.test(l)?'hu':/(^|,)es/.test(l)?'es':/(^|,)en/.test(l)?'en':'es';location.replace('/'+t+'/'+location.hash);})();`

export default function RootRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/es/" />
      </noscript>
      <p style={{ fontFamily: 'sans-serif', padding: 24 }}>
        <a href="/es/">Español</a> · <a href="/en/">English</a> · <a href="/hu/">Magyar</a>
      </p>
    </>
  )
}
