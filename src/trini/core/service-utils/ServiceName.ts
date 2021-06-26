import { getFieldName } from "trini/reusable/common";

/** 
 * Вспомогательная функция, используемя при объявлении сервисов.
 * 
 * Например:
 * 
 *      export type $RequestManager = { requestManager: IRequestManager };
 *      export const $RequestManager = serviceName((s: $RequestManager) => s.requestManager);
 */
 export function serviceName<TContainer, TValue>(x: ((model: TContainer) => TValue) | string): ((model?: TContainer) => TValue) | string;
 export function serviceName<TContainer, TValue>(x: ((model?: TContainer) => TValue) | string): ((model?: TContainer) => TValue) | string {
     return getFieldName(x)!;
 }
 