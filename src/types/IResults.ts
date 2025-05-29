export interface IResults {
    url: string;
    seoScore: number;
    scoreBreakdown: IScoreBreakdown;
    basicSEO: IBasicSeo;
    headingStructure: IHeadingStructure[];
    images: IImages;
    content: IContent;
    technicalSEO: ITechnicalSEO;
    linkAnalysis: {
        internalLinks: number;
        externalLinks: number;
        noFollowLinks: number;
        totalLinks: number;
    };
    pageSpeed: {
        performance: number;
        seo: number | null;
        accessibility: number | null;
    };
    suggestions: string[];
    grade: string;
}

export interface IScoreBreakdown {
    title: number;
    metaDescription: number;
    headings: number;
    images: number;
    content: number;
    technical: number;
    pageSpeed: {
        score: number;
        performance: number;
        seo: number | null;
        accessibility: number | null;
    };
}

export interface IBasicSeo {
    title: {
        content: string;
        length: number;
        optimal: boolean;
    };
    metaDescription: {
        content: string;
        length: number;
        optimal: boolean;
    };
    metaKeywords: string;
}

export interface IHeadingStructure {
    level: number;
    count: number;
    texts: string[];
}

export interface IImages {
    total: number;
    withoutAlt: number;
    withEmptyAlt: number;
    altOptimization: number;
}

export interface IContent {
    wordCount: number;
    readabilityScore: number;
}

export interface ITechnicalSEO {
    hasRobotsMeta: boolean;
    hasViewportMeta: boolean;
    hasCanonical: boolean;
    hasOpenGraph: boolean;
    hasTwitterCard: boolean;
    hasJsonLd: boolean;
    hasFavicon: boolean;
    hasLangAttribute: boolean;
}
