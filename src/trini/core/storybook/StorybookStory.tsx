import classNames from 'classnames';
import React from 'react';
import './StorybookStory.css';

export interface StoryParameters {
    /** Should story be included in screenshot tests. Default: true */
    screenshots?: boolean;
    disableMobile?: boolean;
}

export function story(title: string, story: () => JSX.Element, params?: StoryParameters) {
    (story as any)["decorators"] = [
        (Story: any) => (
            <>
                <div className={classNames(params?.disableMobile && 'storybook__disabled-mobile', 'storybook__page')}>
                    <div style={{width: '100%'}}>
                        <h1 style={{fontSize: '1.1em'}}>{title}</h1>
                    </div>
                    <div className="storybook__wrapper">
                        <Story />
                    </div>
                </div>
                {params?.disableMobile && <DisabledMobileNotification />}
            </>
        )
    ];
    if (params?.screenshots === false) {
        (story as any)["parameters"] = {
            loki: { skip: true }
        };
    }
    return story;
}

const DisabledMobileNotification = () => {
    const DISABLED_MOBILE_NOTIFICATION = 'НЕ ПОДДЕРЖИВАЕТ МОБИЛЬНУЮ ВЕРСИЮ';
    return (
        <span className="storybook__disabled-mobile__notification">{DISABLED_MOBILE_NOTIFICATION}</span>
    );
};

/** loki скриншотит только то, что находится в div.#root, поэтому, если контент не входит в его границы, надо растянуть контент на всю высоту */
export const StretchRoot = (props: any) => {
    return (
        <div style={{height: '100vh'}}>{props.children}</div>
    );
};