
type Props = {
    children: React.ReactNode;
}

export function BoxDefault({children}: Props) {
    return (
        <div className="w-72 text-center sm:w-9/12 bg-blue-900 mx-auto my-28 py-10 sm:pt-16">
            {children}
        </div>
    )
}