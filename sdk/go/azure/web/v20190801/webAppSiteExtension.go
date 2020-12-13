// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Site Extension Information.
type WebAppSiteExtension struct {
	pulumi.CustomResourceState

	// List of authors.
	Authors pulumi.StringArrayOutput `pulumi:"authors"`
	// Site Extension comment.
	Comment pulumi.StringPtrOutput `pulumi:"comment"`
	// Detailed description.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Count of downloads.
	DownloadCount pulumi.IntPtrOutput `pulumi:"downloadCount"`
	// Site extension ID.
	ExtensionId pulumi.StringPtrOutput `pulumi:"extensionId"`
	// Site extension type.
	ExtensionType pulumi.StringPtrOutput `pulumi:"extensionType"`
	// Extension URL.
	ExtensionUrl pulumi.StringPtrOutput `pulumi:"extensionUrl"`
	// Feed URL.
	FeedUrl pulumi.StringPtrOutput `pulumi:"feedUrl"`
	// Icon URL.
	IconUrl pulumi.StringPtrOutput `pulumi:"iconUrl"`
	// Installed timestamp.
	InstalledDateTime pulumi.StringPtrOutput `pulumi:"installedDateTime"`
	// Installer command line parameters.
	InstallerCommandLineParams pulumi.StringPtrOutput `pulumi:"installerCommandLineParams"`
	// Kind of resource.
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// License URL.
	LicenseUrl pulumi.StringPtrOutput `pulumi:"licenseUrl"`
	// <code>true</code> if the local version is the latest version; <code>false</code> otherwise.
	LocalIsLatestVersion pulumi.BoolPtrOutput `pulumi:"localIsLatestVersion"`
	// Local path.
	LocalPath pulumi.StringPtrOutput `pulumi:"localPath"`
	// Resource Name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Project URL.
	ProjectUrl pulumi.StringPtrOutput `pulumi:"projectUrl"`
	// Provisioning state.
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// Published timestamp.
	PublishedDateTime pulumi.StringPtrOutput `pulumi:"publishedDateTime"`
	// Summary description.
	Summary pulumi.StringPtrOutput `pulumi:"summary"`
	Title   pulumi.StringPtrOutput `pulumi:"title"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// Version information.
	Version pulumi.StringPtrOutput `pulumi:"version"`
}

// NewWebAppSiteExtension registers a new resource with the given unique name, arguments, and options.
func NewWebAppSiteExtension(ctx *pulumi.Context,
	name string, args *WebAppSiteExtensionArgs, opts ...pulumi.ResourceOption) (*WebAppSiteExtension, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.SiteExtensionId == nil {
		return nil, errors.New("invalid value for required argument 'SiteExtensionId'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/latest:WebAppSiteExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20160801:WebAppSiteExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20180201:WebAppSiteExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20181101:WebAppSiteExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:WebAppSiteExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200901:WebAppSiteExtension"),
		},
	})
	opts = append(opts, aliases)
	var resource WebAppSiteExtension
	err := ctx.RegisterResource("azure-nextgen:web/v20190801:WebAppSiteExtension", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWebAppSiteExtension gets an existing WebAppSiteExtension resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWebAppSiteExtension(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WebAppSiteExtensionState, opts ...pulumi.ResourceOption) (*WebAppSiteExtension, error) {
	var resource WebAppSiteExtension
	err := ctx.ReadResource("azure-nextgen:web/v20190801:WebAppSiteExtension", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering WebAppSiteExtension resources.
type webAppSiteExtensionState struct {
	// List of authors.
	Authors []string `pulumi:"authors"`
	// Site Extension comment.
	Comment *string `pulumi:"comment"`
	// Detailed description.
	Description *string `pulumi:"description"`
	// Count of downloads.
	DownloadCount *int `pulumi:"downloadCount"`
	// Site extension ID.
	ExtensionId *string `pulumi:"extensionId"`
	// Site extension type.
	ExtensionType *string `pulumi:"extensionType"`
	// Extension URL.
	ExtensionUrl *string `pulumi:"extensionUrl"`
	// Feed URL.
	FeedUrl *string `pulumi:"feedUrl"`
	// Icon URL.
	IconUrl *string `pulumi:"iconUrl"`
	// Installed timestamp.
	InstalledDateTime *string `pulumi:"installedDateTime"`
	// Installer command line parameters.
	InstallerCommandLineParams *string `pulumi:"installerCommandLineParams"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// License URL.
	LicenseUrl *string `pulumi:"licenseUrl"`
	// <code>true</code> if the local version is the latest version; <code>false</code> otherwise.
	LocalIsLatestVersion *bool `pulumi:"localIsLatestVersion"`
	// Local path.
	LocalPath *string `pulumi:"localPath"`
	// Resource Name.
	Name *string `pulumi:"name"`
	// Project URL.
	ProjectUrl *string `pulumi:"projectUrl"`
	// Provisioning state.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Published timestamp.
	PublishedDateTime *string `pulumi:"publishedDateTime"`
	// Summary description.
	Summary *string `pulumi:"summary"`
	Title   *string `pulumi:"title"`
	// Resource type.
	Type *string `pulumi:"type"`
	// Version information.
	Version *string `pulumi:"version"`
}

type WebAppSiteExtensionState struct {
	// List of authors.
	Authors pulumi.StringArrayInput
	// Site Extension comment.
	Comment pulumi.StringPtrInput
	// Detailed description.
	Description pulumi.StringPtrInput
	// Count of downloads.
	DownloadCount pulumi.IntPtrInput
	// Site extension ID.
	ExtensionId pulumi.StringPtrInput
	// Site extension type.
	ExtensionType pulumi.StringPtrInput
	// Extension URL.
	ExtensionUrl pulumi.StringPtrInput
	// Feed URL.
	FeedUrl pulumi.StringPtrInput
	// Icon URL.
	IconUrl pulumi.StringPtrInput
	// Installed timestamp.
	InstalledDateTime pulumi.StringPtrInput
	// Installer command line parameters.
	InstallerCommandLineParams pulumi.StringPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// License URL.
	LicenseUrl pulumi.StringPtrInput
	// <code>true</code> if the local version is the latest version; <code>false</code> otherwise.
	LocalIsLatestVersion pulumi.BoolPtrInput
	// Local path.
	LocalPath pulumi.StringPtrInput
	// Resource Name.
	Name pulumi.StringPtrInput
	// Project URL.
	ProjectUrl pulumi.StringPtrInput
	// Provisioning state.
	ProvisioningState pulumi.StringPtrInput
	// Published timestamp.
	PublishedDateTime pulumi.StringPtrInput
	// Summary description.
	Summary pulumi.StringPtrInput
	Title   pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
	// Version information.
	Version pulumi.StringPtrInput
}

func (WebAppSiteExtensionState) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppSiteExtensionState)(nil)).Elem()
}

type webAppSiteExtensionArgs struct {
	// Site name.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Site extension name.
	SiteExtensionId string `pulumi:"siteExtensionId"`
}

// The set of arguments for constructing a WebAppSiteExtension resource.
type WebAppSiteExtensionArgs struct {
	// Site name.
	Name pulumi.StringInput
	// Name of the resource group to which the resource belongs.
	ResourceGroupName pulumi.StringInput
	// Site extension name.
	SiteExtensionId pulumi.StringInput
}

func (WebAppSiteExtensionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppSiteExtensionArgs)(nil)).Elem()
}

type WebAppSiteExtensionInput interface {
	pulumi.Input

	ToWebAppSiteExtensionOutput() WebAppSiteExtensionOutput
	ToWebAppSiteExtensionOutputWithContext(ctx context.Context) WebAppSiteExtensionOutput
}

func (WebAppSiteExtension) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppSiteExtension)(nil)).Elem()
}

func (i WebAppSiteExtension) ToWebAppSiteExtensionOutput() WebAppSiteExtensionOutput {
	return i.ToWebAppSiteExtensionOutputWithContext(context.Background())
}

func (i WebAppSiteExtension) ToWebAppSiteExtensionOutputWithContext(ctx context.Context) WebAppSiteExtensionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WebAppSiteExtensionOutput)
}

type WebAppSiteExtensionOutput struct {
	*pulumi.OutputState
}

func (WebAppSiteExtensionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppSiteExtensionOutput)(nil)).Elem()
}

func (o WebAppSiteExtensionOutput) ToWebAppSiteExtensionOutput() WebAppSiteExtensionOutput {
	return o
}

func (o WebAppSiteExtensionOutput) ToWebAppSiteExtensionOutputWithContext(ctx context.Context) WebAppSiteExtensionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(WebAppSiteExtensionOutput{})
}
