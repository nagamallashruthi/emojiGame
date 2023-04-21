// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {card, shuffledEmojisList} = props
  const {emojiName, emojiUrl} = card

  const emojiClicked = () => {
    shuffledEmojisList()
  }

  return (
    <li className="li">
      <button type="button" className="btn" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
