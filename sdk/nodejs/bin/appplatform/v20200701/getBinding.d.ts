import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getBinding(args: GetBindingArgs, opts?: pulumi.InvokeOptions): Promise<GetBindingResult>;
export interface GetBindingArgs {
    /**
     * The name of the App resource.
     */
    readonly appName: string;
    /**
     * The name of the Binding resource.
     */
    readonly bindingName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    readonly serviceName: string;
}
/**
 * Binding resource payload
 */
export interface GetBindingResult {
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of the Binding resource
     */
    readonly properties: outputs.appplatform.v20200701.BindingResourcePropertiesResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
