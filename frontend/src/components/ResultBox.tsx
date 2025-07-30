interface Props {
    pace: string;
}

export default function ResultBox({ pace }: Props) {
    return (
        pace && (
            <div className="mt-4 text-center text-xl font-semibold text-gray-700">
                {pace}
            </div>
        )
    );
}
