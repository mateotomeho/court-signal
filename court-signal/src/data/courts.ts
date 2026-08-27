import type { Court } from '../types/court'

export const courts: Court[] = [
    {
        id: 'guinness-park',
        name: 'Guinness Park',
        totalCourts: 2,
        availableCourts: 1,
        waitingGroups: 0,
        updatedMinutesAgo: 5,
        latitude: 45.4215,
        longitude: -75.6972,
        mapXPercent: 26,
        mapYPercent: 34,
    },
    {
        id: 'half-moon-bay-park',
        name: 'Half Moon Bay Park',
        totalCourts: 3,
        availableCourts: 2,
        waitingGroups: 1,   
        updatedMinutesAgo: 70,
        latitude: 45.251,
        longitude: -75.773,
        mapXPercent: 58,
        mapYPercent: 52,
    },
    {
        id: 'barrhaven-tennis-club',
        name: 'Barrhaven Tennis Club',
        totalCourts: 3,
        availableCourts: 0,
        waitingGroups: 2,
        updatedMinutesAgo: 2,
        latitude: 45.283,
        longitude: -75.741,
        mapXPercent: 72,
        mapYPercent: 24,
    }
]