export interface EventbriteEvent {
    id: string,
    name: {
        text: string
    },
    description: {
        text: string
    },
    url: string,
    start: {
        timezone: string,
        local: string
    },
    end: {
        timezone: string,
        local: string
    },

    logo: {
        original: {
            url: string,
            width: number,
            height: number
        }
    }
    
}
