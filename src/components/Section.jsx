export default function Section({titulo,children}){
    return(
        <section>
            <h1>{titulo}</h1>
            <div className="flex">
                {children}
            </div>
        </section>
    )
}