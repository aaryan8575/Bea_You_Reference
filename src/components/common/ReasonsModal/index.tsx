import { useCallback, useState } from "react"
import { medusaClient } from "@/lib/config"
import clsx from "clsx"
import { useReturnReasons } from "medusa-react"
import MinusIcon from "@/public/icons/minus.svg"
import PlusIcon from "@/public/icons/plus.svg"
import Button from "../Button"

export type ReasonsProps = {
  order_id: string
  item_id: string
  quantity: number
}

// type option = {
//   id: Number;
//   name: string;
//   value: string;
// };

type ListProps = {
  quantity: number
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

type Props = ReasonsProps &
  ListProps & {
    closeModal: () => void
  }

const ReasonsModal = ({ order_id, item_id, quantity, closeModal }: Props) => {
  const [selected, setSelected] = useState<string | undefined>(undefined)
  const [textValue, setTextValue] = useState("")
  const { return_reasons, isLoading } = useReturnReasons()

  const handleTextChange = (event) => {
    setTextValue(event.target.value)
  }

  const [returnItemCount, setreturnItemCount] = useState(1)

  const onReturnSubmit = useCallback(() => {
    medusaClient.returns
      .create({
        order_id,
        items: [
          {
            item_id,
            quantity: returnItemCount,
            reason_id: selected,
            note: textValue,
          },
        ],
      })
      .then((data) => {
        const status = data.return.status
        if (status === "requested") {
          const statusDiv = document.getElementById("statusDiv")
          if (statusDiv) {
            statusDiv.innerText = "Your order return is requested"
          }
        }
      })
      .catch((error) => {
        const statusDiv = document.getElementById("statusDiv")
        if (statusDiv) {
          statusDiv.innerText = error.message
        }
      })
      .finally(() => {
        closeModal()
      })
  }, [selected, textValue, closeModal, item_id, order_id, returnItemCount])

  return (
    <div className="bg-white p-5">
      <h5>Enter Return Reasons</h5>
      {return_reasons && !return_reasons.length && (
        <span>No Return Reasons</span>
      )}
      {isLoading && <div id="statusDiv">loading ....</div>}
      {return_reasons?.length &&
        return_reasons?.map((x) => {
          return (
            <div
              key={x?.id}
              onClick={() => setSelected(x.id)}
              className={clsx(
                "cursor-pointer select-none flex items-center gap-5 relative my-3 py-3 hover:bg-greenLight px-5 border border-green h-full w-full rounded-2xl",
                {
                  "border-pink bg-greenLight": selected === x?.id,
                }
              )}
            >
              <input
                type="radio"
                id={x?.id}
                name={`reasons${x.id}`}
                checked={selected === x?.id}
              />
              <span>{x.label}</span>
            </div>
          )
        })}

      <textarea
        placeholder="Enter Description"
        className="px-4 py-3 outline-none w-full placeholder:font-semibold border focus:border-green rounded-2xl mb-5"
        onChange={handleTextChange}
      />
      {quantity > 1 && (
        <div className="h-12 mb-5 flex gap-5 items-center font-semibold ">
          return items
          <div className="flex gap-2 sm:gap-4 items-center justify-center">
            <Button
              variant="round"
              color="green"
              id="countdecrease"
              aria-label="countdecrease"
              className="text-blue flex-1 h-12"
              onClick={() => {
                setreturnItemCount((c) => c - 1)
              }}
              disabled={returnItemCount <= 1 ? true : false}
            >
              <MinusIcon width="15" height="15" />
            </Button>
            <p className="text-subtitle2"> {returnItemCount} </p>
            <Button
              variant="round"
              color="green"
              id="countincrease"
              aria-label="countincrease"
              className="text-white flex-1 h-12"
              onClick={() => {
                setreturnItemCount((c) => c + 1)
              }}
              disabled={quantity <= returnItemCount ? true : false}
            >
              <PlusIcon width="15" height="15" />
            </Button>
          </div>
        </div>
      )}
      <div className="flex gap-5">
        <Button onClick={onReturnSubmit} variant="fill" color="green">
          Submit
        </Button>
        <Button onClick={closeModal} variant="fill" color="green">
          Close
        </Button>
      </div>
    </div>
  )
}

export default ReasonsModal
