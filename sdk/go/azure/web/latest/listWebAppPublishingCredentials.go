// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func ListWebAppPublishingCredentials(ctx *pulumi.Context, args *ListWebAppPublishingCredentialsArgs, opts ...pulumi.InvokeOption) (*ListWebAppPublishingCredentialsResult, error) {
	var rv ListWebAppPublishingCredentialsResult
	err := ctx.Invoke("azure-nextgen:web/latest:listWebAppPublishingCredentials", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type ListWebAppPublishingCredentialsArgs struct {
	// Name of the app.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// User credentials used for publishing activity.
type ListWebAppPublishingCredentialsResult struct {
	// Resource Id.
	Id string `pulumi:"id"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name string `pulumi:"name"`
	// Password used for publishing.
	PublishingPassword *string `pulumi:"publishingPassword"`
	// Password hash used for publishing.
	PublishingPasswordHash *string `pulumi:"publishingPasswordHash"`
	// Password hash salt used for publishing.
	PublishingPasswordHashSalt *string `pulumi:"publishingPasswordHashSalt"`
	// Username used for publishing.
	PublishingUserName string `pulumi:"publishingUserName"`
	// Url of SCM site.
	ScmUri *string `pulumi:"scmUri"`
	// The system metadata relating to this resource.
	SystemData SystemDataResponse `pulumi:"systemData"`
	// Resource type.
	Type string `pulumi:"type"`
}
