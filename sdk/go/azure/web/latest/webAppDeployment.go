// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// User credentials used for publishing activity.
type WebAppDeployment struct {
	pulumi.CustomResourceState

	// True if deployment is currently active, false if completed and null if not started.
	Active pulumi.BoolPtrOutput `pulumi:"active"`
	// Who authored the deployment.
	Author pulumi.StringPtrOutput `pulumi:"author"`
	// Author email.
	AuthorEmail pulumi.StringPtrOutput `pulumi:"authorEmail"`
	// Who performed the deployment.
	Deployer pulumi.StringPtrOutput `pulumi:"deployer"`
	// Details on deployment.
	Details pulumi.StringPtrOutput `pulumi:"details"`
	// End time.
	EndTime pulumi.StringPtrOutput `pulumi:"endTime"`
	// Kind of resource.
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// Details about deployment status.
	Message pulumi.StringPtrOutput `pulumi:"message"`
	// Resource Name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Start time.
	StartTime pulumi.StringPtrOutput `pulumi:"startTime"`
	// Deployment status.
	Status pulumi.IntPtrOutput `pulumi:"status"`
	// The system metadata relating to this resource.
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewWebAppDeployment registers a new resource with the given unique name, arguments, and options.
func NewWebAppDeployment(ctx *pulumi.Context,
	name string, args *WebAppDeploymentArgs, opts ...pulumi.ResourceOption) (*WebAppDeployment, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Id == nil {
		return nil, errors.New("invalid value for required argument 'Id'")
	}
	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/v20150801:WebAppDeployment"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20160801:WebAppDeployment"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20180201:WebAppDeployment"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20181101:WebAppDeployment"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20190801:WebAppDeployment"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:WebAppDeployment"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200901:WebAppDeployment"),
		},
	})
	opts = append(opts, aliases)
	var resource WebAppDeployment
	err := ctx.RegisterResource("azure-nextgen:web/latest:WebAppDeployment", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWebAppDeployment gets an existing WebAppDeployment resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWebAppDeployment(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WebAppDeploymentState, opts ...pulumi.ResourceOption) (*WebAppDeployment, error) {
	var resource WebAppDeployment
	err := ctx.ReadResource("azure-nextgen:web/latest:WebAppDeployment", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering WebAppDeployment resources.
type webAppDeploymentState struct {
	// True if deployment is currently active, false if completed and null if not started.
	Active *bool `pulumi:"active"`
	// Who authored the deployment.
	Author *string `pulumi:"author"`
	// Author email.
	AuthorEmail *string `pulumi:"authorEmail"`
	// Who performed the deployment.
	Deployer *string `pulumi:"deployer"`
	// Details on deployment.
	Details *string `pulumi:"details"`
	// End time.
	EndTime *string `pulumi:"endTime"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Details about deployment status.
	Message *string `pulumi:"message"`
	// Resource Name.
	Name *string `pulumi:"name"`
	// Start time.
	StartTime *string `pulumi:"startTime"`
	// Deployment status.
	Status *int `pulumi:"status"`
	// The system metadata relating to this resource.
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type WebAppDeploymentState struct {
	// True if deployment is currently active, false if completed and null if not started.
	Active pulumi.BoolPtrInput
	// Who authored the deployment.
	Author pulumi.StringPtrInput
	// Author email.
	AuthorEmail pulumi.StringPtrInput
	// Who performed the deployment.
	Deployer pulumi.StringPtrInput
	// Details on deployment.
	Details pulumi.StringPtrInput
	// End time.
	EndTime pulumi.StringPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Details about deployment status.
	Message pulumi.StringPtrInput
	// Resource Name.
	Name pulumi.StringPtrInput
	// Start time.
	StartTime pulumi.StringPtrInput
	// Deployment status.
	Status pulumi.IntPtrInput
	// The system metadata relating to this resource.
	SystemData SystemDataResponsePtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (WebAppDeploymentState) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppDeploymentState)(nil)).Elem()
}

type webAppDeploymentArgs struct {
	// True if deployment is currently active, false if completed and null if not started.
	Active *bool `pulumi:"active"`
	// Who authored the deployment.
	Author *string `pulumi:"author"`
	// Author email.
	AuthorEmail *string `pulumi:"authorEmail"`
	// Who performed the deployment.
	Deployer *string `pulumi:"deployer"`
	// Details on deployment.
	Details *string `pulumi:"details"`
	// End time.
	EndTime *string `pulumi:"endTime"`
	// ID of an existing deployment.
	Id string `pulumi:"id"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Details about deployment status.
	Message *string `pulumi:"message"`
	// Name of the app.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Start time.
	StartTime *string `pulumi:"startTime"`
	// Deployment status.
	Status *int `pulumi:"status"`
}

// The set of arguments for constructing a WebAppDeployment resource.
type WebAppDeploymentArgs struct {
	// True if deployment is currently active, false if completed and null if not started.
	Active pulumi.BoolPtrInput
	// Who authored the deployment.
	Author pulumi.StringPtrInput
	// Author email.
	AuthorEmail pulumi.StringPtrInput
	// Who performed the deployment.
	Deployer pulumi.StringPtrInput
	// Details on deployment.
	Details pulumi.StringPtrInput
	// End time.
	EndTime pulumi.StringPtrInput
	// ID of an existing deployment.
	Id pulumi.StringInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Details about deployment status.
	Message pulumi.StringPtrInput
	// Name of the app.
	Name pulumi.StringInput
	// Name of the resource group to which the resource belongs.
	ResourceGroupName pulumi.StringInput
	// Start time.
	StartTime pulumi.StringPtrInput
	// Deployment status.
	Status pulumi.IntPtrInput
}

func (WebAppDeploymentArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppDeploymentArgs)(nil)).Elem()
}

type WebAppDeploymentInput interface {
	pulumi.Input

	ToWebAppDeploymentOutput() WebAppDeploymentOutput
	ToWebAppDeploymentOutputWithContext(ctx context.Context) WebAppDeploymentOutput
}

func (WebAppDeployment) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppDeployment)(nil)).Elem()
}

func (i WebAppDeployment) ToWebAppDeploymentOutput() WebAppDeploymentOutput {
	return i.ToWebAppDeploymentOutputWithContext(context.Background())
}

func (i WebAppDeployment) ToWebAppDeploymentOutputWithContext(ctx context.Context) WebAppDeploymentOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WebAppDeploymentOutput)
}

type WebAppDeploymentOutput struct {
	*pulumi.OutputState
}

func (WebAppDeploymentOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppDeploymentOutput)(nil)).Elem()
}

func (o WebAppDeploymentOutput) ToWebAppDeploymentOutput() WebAppDeploymentOutput {
	return o
}

func (o WebAppDeploymentOutput) ToWebAppDeploymentOutputWithContext(ctx context.Context) WebAppDeploymentOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(WebAppDeploymentOutput{})
}
