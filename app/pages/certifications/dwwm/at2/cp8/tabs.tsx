import { Snippet } from "@/components/Snippet";

const nginxReverseProxySnippets = [
	{
		name: "/etc/nginx/sites-available/mon-domaine.com",
		codeLanguage: "nginx",
		withLineNumbers: true,
		code: `# Ensemble de configurations pour un serveur Nginx
server {
    listen 80; # Port 80 pour les requêtes HTTP
    listen [::]:80; # Port 80 pour les requêtes HTTP en IPv6
    server_name mon-domaine.com; # Ton domaine qui pointe vers ton serveur web qui fait tourner ton application Node.js

    # Configuration pour le reverse proxy, qui va rediriger les requêtes vers le port 5000
    location / {
        proxy_pass          http://0.0.0.0:5000; # Redirige les requêtes vers le port 5000 (interne au serveur)
        proxy_set_header    X-Forwarded-For $remote_addr; # Envoie l'adresse IP du client à l'application Node.js dans le header
        proxy_set_header    Host $http_host; # Envoie le nom de domaine à l'application Node.js dans le header
    }
}`,
	},
];

export default {
	nginxReverseProxy: () => <Snippet snippets={nginxReverseProxySnippets} />,
};
