const judulFungsi = (props) => {
    return (
        <div>
            <h2>
                <u>
                    {props.title}
                </u>
            </h2>
            <p>
                {props.info}
            </p>
        </div>
    )
}

export default judulFungsi