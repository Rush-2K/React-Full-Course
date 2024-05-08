import { useState } from "react";

export default function UserInput({ onChangeInput, input }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                        type="number" 
                        required
                        value={input.initialInvestment} 
                        onChange={(event) => onChangeInput('initialInvestment', event.target.value)
                        }
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input 
                    type="number" 
                    required
                    value={input.annualInvesment} 
                        onChange={(event) => onChangeInput('annualInvesment', event.target.value)
                        }
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                    type="number" 
                    required
                    value={input.expectedReturn} 
                        onChange={(event) => onChangeInput('expectedReturn', event.target.value)
                        }
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                    type="number" 
                    required
                    value={input.duration} 
                        onChange={(event) => onChangeInput('duration', event.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    )
}