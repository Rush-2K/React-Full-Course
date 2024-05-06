export default function Section ({ title, children, ...props }) {
    // ...props will group all the other left props into an object
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
    
}