// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Source control configuration for an app.
type WebAppSourceControl struct {
	pulumi.CustomResourceState

	// Name of branch to use for deployment.
	Branch pulumi.StringPtrOutput `pulumi:"branch"`
	// <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
	DeploymentRollbackEnabled pulumi.BoolPtrOutput `pulumi:"deploymentRollbackEnabled"`
	// <code>true</code> if this is deployed via GitHub action.
	IsGitHubAction pulumi.BoolPtrOutput `pulumi:"isGitHubAction"`
	// <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
	IsManualIntegration pulumi.BoolPtrOutput `pulumi:"isManualIntegration"`
	// <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
	IsMercurial pulumi.BoolPtrOutput `pulumi:"isMercurial"`
	// Kind of resource.
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// Resource Name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Repository or source control URL.
	RepoUrl pulumi.StringPtrOutput `pulumi:"repoUrl"`
	// The system metadata relating to this resource.
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewWebAppSourceControl registers a new resource with the given unique name, arguments, and options.
func NewWebAppSourceControl(ctx *pulumi.Context,
	name string, args *WebAppSourceControlArgs, opts ...pulumi.ResourceOption) (*WebAppSourceControl, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/latest:WebAppSourceControl"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20150801:WebAppSourceControl"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20160801:WebAppSourceControl"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20180201:WebAppSourceControl"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20181101:WebAppSourceControl"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20190801:WebAppSourceControl"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:WebAppSourceControl"),
		},
	})
	opts = append(opts, aliases)
	var resource WebAppSourceControl
	err := ctx.RegisterResource("azure-nextgen:web/v20200901:WebAppSourceControl", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWebAppSourceControl gets an existing WebAppSourceControl resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWebAppSourceControl(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WebAppSourceControlState, opts ...pulumi.ResourceOption) (*WebAppSourceControl, error) {
	var resource WebAppSourceControl
	err := ctx.ReadResource("azure-nextgen:web/v20200901:WebAppSourceControl", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering WebAppSourceControl resources.
type webAppSourceControlState struct {
	// Name of branch to use for deployment.
	Branch *string `pulumi:"branch"`
	// <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
	DeploymentRollbackEnabled *bool `pulumi:"deploymentRollbackEnabled"`
	// <code>true</code> if this is deployed via GitHub action.
	IsGitHubAction *bool `pulumi:"isGitHubAction"`
	// <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
	IsManualIntegration *bool `pulumi:"isManualIntegration"`
	// <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
	IsMercurial *bool `pulumi:"isMercurial"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name *string `pulumi:"name"`
	// Repository or source control URL.
	RepoUrl *string `pulumi:"repoUrl"`
	// The system metadata relating to this resource.
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type WebAppSourceControlState struct {
	// Name of branch to use for deployment.
	Branch pulumi.StringPtrInput
	// <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
	DeploymentRollbackEnabled pulumi.BoolPtrInput
	// <code>true</code> if this is deployed via GitHub action.
	IsGitHubAction pulumi.BoolPtrInput
	// <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
	IsManualIntegration pulumi.BoolPtrInput
	// <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
	IsMercurial pulumi.BoolPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Resource Name.
	Name pulumi.StringPtrInput
	// Repository or source control URL.
	RepoUrl pulumi.StringPtrInput
	// The system metadata relating to this resource.
	SystemData SystemDataResponsePtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (WebAppSourceControlState) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppSourceControlState)(nil)).Elem()
}

type webAppSourceControlArgs struct {
	// Name of branch to use for deployment.
	Branch *string `pulumi:"branch"`
	// <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
	DeploymentRollbackEnabled *bool `pulumi:"deploymentRollbackEnabled"`
	// <code>true</code> if this is deployed via GitHub action.
	IsGitHubAction *bool `pulumi:"isGitHubAction"`
	// <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
	IsManualIntegration *bool `pulumi:"isManualIntegration"`
	// <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
	IsMercurial *bool `pulumi:"isMercurial"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Name of the app.
	Name string `pulumi:"name"`
	// Repository or source control URL.
	RepoUrl *string `pulumi:"repoUrl"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a WebAppSourceControl resource.
type WebAppSourceControlArgs struct {
	// Name of branch to use for deployment.
	Branch pulumi.StringPtrInput
	// <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
	DeploymentRollbackEnabled pulumi.BoolPtrInput
	// <code>true</code> if this is deployed via GitHub action.
	IsGitHubAction pulumi.BoolPtrInput
	// <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
	IsManualIntegration pulumi.BoolPtrInput
	// <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
	IsMercurial pulumi.BoolPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Name of the app.
	Name pulumi.StringInput
	// Repository or source control URL.
	RepoUrl pulumi.StringPtrInput
	// Name of the resource group to which the resource belongs.
	ResourceGroupName pulumi.StringInput
}

func (WebAppSourceControlArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppSourceControlArgs)(nil)).Elem()
}

type WebAppSourceControlInput interface {
	pulumi.Input

	ToWebAppSourceControlOutput() WebAppSourceControlOutput
	ToWebAppSourceControlOutputWithContext(ctx context.Context) WebAppSourceControlOutput
}

func (WebAppSourceControl) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppSourceControl)(nil)).Elem()
}

func (i WebAppSourceControl) ToWebAppSourceControlOutput() WebAppSourceControlOutput {
	return i.ToWebAppSourceControlOutputWithContext(context.Background())
}

func (i WebAppSourceControl) ToWebAppSourceControlOutputWithContext(ctx context.Context) WebAppSourceControlOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WebAppSourceControlOutput)
}

type WebAppSourceControlOutput struct {
	*pulumi.OutputState
}

func (WebAppSourceControlOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppSourceControlOutput)(nil)).Elem()
}

func (o WebAppSourceControlOutput) ToWebAppSourceControlOutput() WebAppSourceControlOutput {
	return o
}

func (o WebAppSourceControlOutput) ToWebAppSourceControlOutputWithContext(ctx context.Context) WebAppSourceControlOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(WebAppSourceControlOutput{})
}
