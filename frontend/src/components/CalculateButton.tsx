interface Props {
    onClick: () => void;
}

export default function CalculateButton({ onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
            Calcular
        </button>
    );
}
