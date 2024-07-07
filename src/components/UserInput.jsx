const UserInput = ({onChangePropFunc, userInput}) => {

    
    

    return (
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                    type="number" 
                    required
                    value={userInput.initialInvestment}
                    onChange={(event) => {
                        onChangePropFunc('initialInvestment', 
                            event.target.value
                        )
                    }}
                />
            </p>
            
            <p>
                <label>Annual Investment</label>
                <input 
                    type="number" 
                    required
                    value={userInput.annualInvestment}
                    onChange={(event) => {
                        onChangePropFunc('annualInvestment', 
                            event.target.value
                        )
                    }}
                />
            </p>
        </div>


        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input 
                type="number" 
                required
                value={userInput.expectedReturn}
                onChange={(event) => {
                    onChangePropFunc('expectedReturn', 
                        event.target.value
                    )
                }}
                />
            </p>
            <p>
                <label>Duration</label>
                <input 
                    type="number" 
                    required
                    value={userInput.duration}
                    onChange={(event) => {
                        onChangePropFunc('duration', 
                            event.target.value
                        )
                    }}
                />
            </p>
        </div>


    </section>
    );
}

export default UserInput;