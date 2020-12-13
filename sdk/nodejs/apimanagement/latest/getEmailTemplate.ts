// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getEmailTemplate(args: GetEmailTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetEmailTemplateResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:apimanagement/latest:getEmailTemplate", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "templateName": args.templateName,
    }, opts);
}

export interface GetEmailTemplateArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
    /**
     * Email Template Name Identifier.
     */
    readonly templateName: string;
}

/**
 * Email Template details.
 */
export interface GetEmailTemplateResult {
    /**
     * Email Template Body. This should be a valid XDocument
     */
    readonly body: string;
    /**
     * Description of the Email Template.
     */
    readonly description?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Whether the template is the default template provided by Api Management or has been edited.
     */
    readonly isDefault: boolean;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Email Template Parameter values.
     */
    readonly parameters?: outputs.apimanagement.latest.EmailTemplateParametersContractPropertiesResponse[];
    /**
     * Subject of the Template.
     */
    readonly subject: string;
    /**
     * Title of the Template.
     */
    readonly title?: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
