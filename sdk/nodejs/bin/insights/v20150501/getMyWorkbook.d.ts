import * as pulumi from "@pulumi/pulumi";
export declare function getMyWorkbook(args: GetMyWorkbookArgs, opts?: pulumi.InvokeOptions): Promise<GetMyWorkbookResult>;
export interface GetMyWorkbookArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Application Insights component resource.
     */
    readonly resourceName: string;
}
/**
 * An Application Insights private workbook definition.
 */
export interface GetMyWorkbookResult {
    /**
     * Workbook category, as defined by the user at creation time.
     */
    readonly category: string;
    /**
     * The user-defined name of the private workbook.
     */
    readonly displayName: string;
    /**
     * The kind of workbook. Choices are user and shared.
     */
    readonly kind?: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Azure resource name
     */
    readonly name?: string;
    /**
     * Configuration of this particular private workbook. Configuration data is a string containing valid JSON
     */
    readonly serializedData: string;
    /**
     * Optional resourceId for a source resource.
     */
    readonly sourceId?: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Date and time in UTC of the last modification that was made to this private workbook definition.
     */
    readonly timeModified: string;
    /**
     * Azure resource type
     */
    readonly type?: string;
    /**
     * Unique user id of the specific user that owns this private workbook.
     */
    readonly userId: string;
    /**
     * This instance's version of the data model. This can change as new features are added that can be marked private workbook.
     */
    readonly version?: string;
}
