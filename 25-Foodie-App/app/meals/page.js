import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/components/lib/meals'
import { Suspense } from 'react';

async function Meals() {
    const meals = await getMeals();

    return <MealsGrid meals={meals} />
}

export default function MealsPage() {
    

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicous Meal, created
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipes and cook it yourself</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your favorite recipes
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}

