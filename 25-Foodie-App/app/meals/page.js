import Link from 'next/link'
import classes from './page.module.css'

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
                
            </main>
        </>
    )
}

