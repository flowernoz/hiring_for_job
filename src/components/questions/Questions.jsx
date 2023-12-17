import React from 'react'
import './Question.css'
import { Accordion } from 'react-bootstrap'
import { questionsData } from '../../static/questionsData'

function Questions() {
    console.log(questionsData);
    return (
        <div className='question' id='faq' >
            <h1>FREQUENTLY ASKED <span>QUESTONS</span></h1>
            <div className='question_card'>
                <Accordion defaultActiveKey="0" className='ACmain'>
                    {
                        questionsData?.map((item, index) =>
                            <Accordion.Item key={index} eventKey={index + 1}>
                                <Accordion.Header>{item.title}</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        {
                                            item?.lists?.map((listItem, index) =>
                                                <li key={index}>{listItem}</li>
                                            )
                                        }
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                        )
                    }
                </Accordion>
            </div>
        </div>
    )
}

export default Questions
