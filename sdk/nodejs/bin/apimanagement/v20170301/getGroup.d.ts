import * as pulumi from "@pulumi/pulumi";
export declare function getGroup(args: GetGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetGroupResult>;
export interface GetGroupArgs {
    /**
     * Group identifier. Must be unique in the current API Management service instance.
     */
    readonly groupId: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
}
/**
 * Contract details.
 */
export interface GetGroupResult {
    /**
     * true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
     */
    readonly builtIn: boolean;
    /**
     * Group description. Can contain HTML formatting tags.
     */
    readonly description?: string;
    /**
     * Group name.
     */
    readonly displayName: string;
    /**
     * For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
     */
    readonly externalId?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
