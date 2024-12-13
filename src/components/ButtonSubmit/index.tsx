import './styles.css'

type Props = {
    text: string
}

export default function ButtonSubmit({ text }: Props) {

    return (
        <button type='submit' className="btn-submit">
            {text}
        </button>
    )
}