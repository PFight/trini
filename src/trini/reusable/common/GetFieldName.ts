/**
 * Лямбда функция вида () => obj.someProperty или (obj) => obj.someProperty.
 * 
 * Функция getFieldName способна конвертировать данное выражение в имя свойства (напр. "someProperty").
 */
 export type FieldSpec<TModel, TResult> = ((model?: TModel) => TResult) | string;
 export type FieldSpecEx<TModel, TResult> = ((model: TModel) => TResult) | string;
 
 /**
  * Преобразует функцию вида () => obj.someProperty или (obj) => obj.someProperty в имя свойства (напр. "someProperty").
  * 
  * Данная функция используется для того, чтобы получить имя свойства, создав при этом TypeScript-ссылку на это свойство.
  * TypeScript-ссылка позволяет использовать инструменты VisualStudio для рефакторинга и исследования кода (например, переименование).
  * @param fieldSpec функция вида () => obj.someProperty или (obj) => obj.someProperty или строка (возвращается без изменений)
  */
 export function getFieldName<TModel, TResult = any>(fieldSpec: FieldSpec<TModel, TResult>): string | null {
     if (typeof (fieldSpec) == "string") {
         return fieldSpec;
     } else if (!fieldSpec) {
         return null;
     } else {
         const funcBody = getFunctionBody(fieldSpec);
         const nameMatches = /return/i.test(funcBody) 
             ? funcBody.match(/^\s*(?:return)\s+(?:[^.]+?[.])*(.+?)\s*[;]*\s*$/im)
             : funcBody.match(/^\s*(?:[^.]+?[.])*(.+?)\s*[;]*\s*$/im);
         return nameMatches && nameMatches[1] || null;
     }
 }
 
 export function getFunctionBody(fn: Function): string {
     const restoreIndent = (body: string) => {
         const lines = body.split("\n");
         if (lines.length <= 1) {
             return body.trim();
         }
         const bodyLine = lines.find(line => line.trim() !== "");
         let indent = typeof bodyLine !== "undefined" ? (/[ \t]*/.exec(bodyLine) || [])[0] : "";
         indent = indent || "";
         return lines.map(line => line.replace(indent, "")).join("\n");
     };
     const fnStr = fn.toString().trim();
     let rawBody = '';
     const singleLineArrowFnBody = (fnStr.match(/^[^\s]+\s?[=][>]\s?([^{].+)/i) || [])[1];
     if (singleLineArrowFnBody) {
         rawBody = singleLineArrowFnBody;
     } else {
         rawBody = fnStr.substring(fnStr.indexOf("{") + 1, fnStr.lastIndexOf("}"));
     }
     const indentedBody = restoreIndent(rawBody);
     let trimmedBody = indentedBody.replace(/^\s+|\s+$/g, "");
     // Fix for test coverage mode. In this mode functions looks like 
     // cov_243au1h375.f[44]++;cov_243au1h375.s[173]++;return Handler_1.at(FolderMainMenuItemParams).folderInfo
     if (trimmedBody.includes("cov_")) {
         let split = trimmedBody.split('++;');
         trimmedBody = split[split.length - 1];
     }
     return trimmedBody;
 }
 