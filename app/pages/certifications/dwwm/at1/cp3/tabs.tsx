import { Snippet } from "@/components/Snippet";

const htmlLazyLoadingSnippets = [
	{
		name: "Lazy loading d'une image en HTML",
		codeLanguage: "html",
		code: `<img
  src="clairiere.jpg"
  srcset="clairiere-480w.webp 480w, clairiere-800w.webp 800w"
  sizes="(max-width: 480px) 100vw, (max-width: 800px) 50vw, 800px"
  alt="Une clairière verdoyante"
  loading="lazy"
/>`,
	},
];

const nginxReverseProxySnippets = [
	{
		name: "Configuration d'un reverse proxy Nginx",
		codeLanguage: "nginx",
		withLineNumbers: true,
		code: `server {
    listen 80;
    listen [::]:80;
    server_name monsite.fr;

    location / {
        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for ; # On transmet l'adresse IP du client
        proxy_set_header    Host $host; # On transmet le nom de domaine
        proxy_pass          http://localhost:3000; # On redirige les requêtes vers le port 3000, où tourne notre application
    }
}`,
	},
];

export default {
	htmlLazyLoading: () => <Snippet snippets={htmlLazyLoadingSnippets} />,
	nginxReverseProxy: () => <Snippet snippets={nginxReverseProxySnippets} />,
};
