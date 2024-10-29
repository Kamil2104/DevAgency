export interface BoostCard {
    percent: string,
    title: string,
    description: string
}

export interface BoostCardProps {
    boostCards: BoostCard[]
}

export interface CardProps {
    card: BoostCard
}