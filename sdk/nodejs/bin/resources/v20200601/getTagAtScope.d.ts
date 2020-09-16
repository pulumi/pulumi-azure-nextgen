import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getTagAtScope(args: GetTagAtScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetTagAtScopeResult>;
export interface GetTagAtScopeArgs {
    /**
     * The resource scope.
     */
    readonly scope: string;
}
/**
 * Wrapper resource for tags API requests and responses.
 */
export interface GetTagAtScopeResult {
    /**
     * The name of the tags wrapper resource.
     */
    readonly name: string;
    /**
     * The set of tags.
     */
    readonly properties: outputs.resources.v20200601.TagsResponse;
    /**
     * The type of the tags wrapper resource.
     */
    readonly type: string;
}
