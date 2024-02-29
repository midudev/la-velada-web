interface SiteConfig {
	author: string
	twitterSite: string
	title: string
	shortDescription: string
	description: string
	canonicalUrl: string
	type: string
	keywords: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: "@IbaiLlanos", // Site author
	twitterSite: "@infoLaVelada",
	title: "La Velada del Año 4", // Site title.
	shortDescription: "Evento de Boxeo de Ibai Llanos",
	description: "Web Oficial de La Velada del Año IV, evento de boxeo entre streamers y creadores de contenido, organizado por Ibai Llanos", // Description to display in the meta tags
	canonicalUrl: "https://lavelada.es",
	type: "website",
	keywords: "velada, streamers, creadores, Ibai, boxeo, midudev",
	lang: "es-ES",
	ogLocale: "es_ES",
	shareMessage: "Share this post", // Message to share a post on social media
	paginationSize: 6, // Number of posts per page
}
