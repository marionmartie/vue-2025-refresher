export interface Job {
    id?: String,
    title: String,
    type: String,
    description: String,
    location: String,
    salary: String,
    company: {
        name: String,
        description: String,
        contactEmail: String,
        contactPhone: String
    }
}