import { CurrentUserContext } from "@/context/useCurrentUser";
import RootLayout from "@/layouts/RootLayout";
import { store } from "@/store/store";
import "@/styles/globals.css";
import type { NextComponentType, NextPage, NextPageContext } from "next";
import type { AppProps } from "next/app";
import { type ReactElement, type ReactNode } from "react";
import { Provider } from "react-redux";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const resolveLayout = (
    Component: NextComponentType<NextPageContext, any, any> &
        NextPageWithLayout<{}, {}>,
    pageProps: any
) => {
    if (Component.getLayout) {
        return Component.getLayout(<Component {...pageProps} />);
    }

    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    return (
        <Provider store={store}>
            <CurrentUserContext.Provider
                value={{
                    userId: 1,
                    name: "John Doe",
                    email: "johndoe@service.com",
                }}>
                {resolveLayout(Component, pageProps)}
            </CurrentUserContext.Provider>
        </Provider>
    );
}
