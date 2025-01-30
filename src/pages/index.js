export default function Home() {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
            <iframe
                src="/hitbosss.pdf"
                className="w-full h-full max-w-full max-h-full border-none"
                style={{ overflow: "auto" }}
            />
        </div>
    );
}