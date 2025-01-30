export default function Home() {
    return (
        <div className="w-screen h-screen flex justify-center bg-gray-100">
            <embed
                src="/hitbosss.pdf"
                type="application/pdf"
                className="w-full h-full"
                style={{ minHeight: "100vh" }}
            />
        </div>
    );
}