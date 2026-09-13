import { use, useState } from 'react'
import type { ITechnology } from '../types/stackType'
import AvailableStack from './AvailableStack'
import StackSidebar from './StackSidebar'
import { toast } from 'react-toastify'

interface TechProps {
    techStackPromise: Promise<ITechnology[]>
}

const TechnologyStack = ({ techStackPromise }: TechProps) => {

    const cards = use(techStackPromise)

    const [stack, setStack] = useState<ITechnology[]>([])

    // Added to tech stack
    const handleAddToStack = (technology: ITechnology) => {

        const alreadyExists = stack.some(
            item => item.id === technology.id
        )

        if (alreadyExists) {
            toast.warning(
                `${technology.name} is already in your stack!`
            )
            return
        }

        setStack(previousStack => [
            ...previousStack,
            technology
        ])
        toast.success(
            `${technology.name} added to your stack!`
        )
    }

    // Removing from tech stack
    const handleRemoveFromStack = (id: string) => {

        const technology = stack.find(
            item => item.id === id
        )

        setStack(previousStack =>
            previousStack.filter(item => item.id !== id)
        )

        if (technology) {
            toast.info(
                `${technology.name} removed from your stack.`
            )
        }
    }

    // Removing all
    const handleRemoveAll = () => {

        if (stack.length === 0) {
            return
        }

        setStack([])

        toast.info('All technologies removed from your stack.')
    }


    return (
        <section className="bg-white px-6 py-12 container mx-auto">

            <div className="mx-w-6xl">


                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Explore the{' '}
                        <span className="text-pink-500">
                            Technologies
                        </span>
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>


                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">


                    <div className="lg:col-span-3">
                        <AvailableStack
                            cards={cards}
                            stack={stack}
                            onAdd={handleAddToStack}
                        />
                    </div>


                    <div className="lg:col-span-1">
                        <StackSidebar
                            stack={stack}
                            onRemove={handleRemoveFromStack}
                            onRemoveAll={handleRemoveAll}
                        />
                    </div>

                </div>

            </div>

        </section>
    )
}

export default TechnologyStack