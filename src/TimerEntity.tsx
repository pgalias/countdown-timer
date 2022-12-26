import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
    count?: number;
    translationKey: string;
}

export const TimerEntity = ({ count = 0, translationKey }: Props) => {
    const { t } = useTranslation();

    return (
        <li>
            <p className="text-md"><strong className="text-3xl">{count}</strong> {t(translationKey, { count })}</p>
        </li>
    );
}
