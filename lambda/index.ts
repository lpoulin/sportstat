export const handler = async (event: any = {}): Promise<any> => {
    console.log('hello world');
    const response = JSON.stringify(event, null, 2);
    return response;
}