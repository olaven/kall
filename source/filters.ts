export const stripStatus = async <T>(result: Promise<[number, T]>) => {

    const [_, payload] = await result;
    return payload;
}