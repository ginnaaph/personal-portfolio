import * as React from 'react'
import { projects } from '@/home/data/projectData'
import type { ProjectItem } from '@/explorations/projects/types'
import ProjectPreviewSlider from './ProjectPreviewSlider'

// Wrapper component that selects data from projectData.ts and feeds the slider.
export default function LatestCardSlider() {
    // Sort by date desc and cap at 4 items
    const items: ProjectItem[] = React.useMemo(() => {
        return [...projects]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 4)
    }, [])

    return <ProjectPreviewSlider items={items} title="Latest Projects" ctaHref="/explorations" />
}