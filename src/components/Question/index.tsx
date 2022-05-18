import { ReactNode } from 'react'
import { IQuestion } from '../../types/IQuestion'
import { UserInfo } from '../UserInfo'
import { QuestionWrapper } from './styles'
import cx from 'classnames'

interface QuestionProps extends IQuestion {
    children?: ReactNode,
}

export const Question = ({
    content,
    author,
    children,
    isAnswered = false,
    isHighlighted = false,
}: QuestionProps) => {

    return (
        <QuestionWrapper
            className={cx(
                { answered: isAnswered },
                { highlighted: isHighlighted && !isAnswered }
            )}
        >
            <p>{content}</p>
            <footer>
                <UserInfo otherUser name={author.name} image={author.avatar} />
                {children}
            </footer>
            <div></div>
        </QuestionWrapper>
    )
}