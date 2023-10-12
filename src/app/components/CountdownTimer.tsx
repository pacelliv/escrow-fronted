"use client"

import { TimerContainer, Timer } from "./styles/CountdownTimer.styled"
import { useState, useRef, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { getDate } from "@/utils/time"

type Params = {
    params: {
        state: number | undefined
    }
}

const CountdownTimer = ({ params: { state } }: Params) => {
    const searchParams = useSearchParams()
    const timestamp = searchParams.get("timestamp")
    const duration = searchParams.get("duration")
    const [days, setDays] = useState<number | string>("00")
    const [hours, setHours] = useState<number | string>("00")
    const [minutes, setMinutes] = useState<number | string>("00")
    const [seconds, setSeconds] = useState<number | string>("00")

    let interval = useRef<NodeJS.Timeout | undefined>(undefined)

    const timer = (): void => {
        const countdownDate = new Date(getDate(timestamp as string)).getTime()

        interval.current = setInterval(() => {
            const now = new Date().getTime()
            const delta = countdownDate + parseInt(duration as string, 10) * 1000 - now
            const days = Math.floor(delta / (1000 * 60 * 60 * 24))
            const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((delta % (1000 * 60)) / 1000)

            if (delta < 0) {
                clearInterval(interval.current!)
            } else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        }, 1000)
    }

    useEffect(() => {
        timer()
        return () => clearInterval(interval.current)
    })

    return (
        <TimerContainer>
            <Timer>
                <div>
                    <p>Ends in:</p>
                </div>
                <div>
                    <section>
                        <p>{state === 0 ? days : "--"}</p>
                        <p>
                            <small>Days</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{state === 0 ? hours : "--"}</p>
                        <p>
                            <small>Hours</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{state === 0 ? minutes : "--"}</p>
                        <p>
                            <small>Minutes</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{state === 0 ? seconds : "--"}</p>
                        <p>
                            <small>Seconds</small>
                        </p>
                    </section>
                </div>
            </Timer>
        </TimerContainer>
    )
}

export default CountdownTimer
